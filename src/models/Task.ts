import { model, Schema } from "mongoose";

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    dueDate: { type: Date },
    status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true,
});

export default model('Task', TaskSchema);