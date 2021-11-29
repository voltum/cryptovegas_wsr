import nextConnect from 'next-connect';
import connection from '../../utils/connection'
import Streamer from '../../models/Streamer'

export default async function handler (req, res) {
    const { method } = req
  
    await connection()
  
    switch (method) {
    //   case 'GET':
    //     try {
    //       const streamers = await Streamer.find({})
    //       res.status(200).json({ success: true, data: streamers })
    //     } catch (error) {
    //       res.status(400).json({ success: false })
    //     }
    //     break
      case 'POST':
        try {
            const body = JSON.parse(req.body);
            const streamer = await Streamer.create({...body, date: Date.now()})
            res.status(201).json({ success: true, data: streamer })
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
}