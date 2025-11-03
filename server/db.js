import pg from 'pg';
const { Pool } = pg;

// 使用 Replit 的 DATABASE_URL 环境变量
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// 初始化数据库表
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        completed BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing database:', error);
  }
};

// 数据库操作函数
export const db = {
  // 获取所有任务
  async getAllTodos() {
    const result = await pool.query(
      'SELECT * FROM todos ORDER BY created_at DESC'
    );
    return result.rows;
  },

  // 创建新任务
  async createTodo(title) {
    const result = await pool.query(
      'INSERT INTO todos (title) VALUES ($1) RETURNING *',
      [title]
    );
    return result.rows[0];
  },

  // 更新任务状态
  async updateTodo(id, completed) {
    const result = await pool.query(
      'UPDATE todos SET completed = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [completed, id]
    );
    return result.rows[0];
  },

  // 删除任务
  async deleteTodo(id) {
    const result = await pool.query(
      'DELETE FROM todos WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  },

  // 初始化数据库
  init: initDB
};

