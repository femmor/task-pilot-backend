import { Schema, model } from 'mongoose';

const AnalyticsSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    task: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    action: { type: String, enum: ['created', 'updated', 'deleted'], required: true },
    timestamp: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

export default model('Analytics', AnalyticsSchema);
