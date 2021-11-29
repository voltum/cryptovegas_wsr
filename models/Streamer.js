import mongoose from 'mongoose'

const StreamerSchema = new mongoose.Schema({
  nickname: String,
  video_url: String,
  timecode: String,
  date: Date
})

module.exports = mongoose.models.Streamer || mongoose.model('Streamer', StreamerSchema)