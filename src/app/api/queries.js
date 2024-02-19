import pool from '../db'; 

export default async function handler(req, res) {
   if (req.method === 'POST') {
       const { query } = req.body; 

       try {
           const result = await pool.query(query);

           res.status(200).json({ data: result.rows });
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   } else {
       res.status(405).json({ error: 'Method not allowed' });
   }
}

