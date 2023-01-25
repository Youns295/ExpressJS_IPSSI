// import { Request, RequestHandler } from "express";
// import db from "../db";


// interface TypedRequestParam extends Request {
//     body: {
//       name: any;
//       username?: string;
//     }
//   }

// export const createNewTodo : RequestHandler = async (req: TypedRequestParam, res) => {
//     try {
//         if (!(req.body?.name)) {
//             throw new Error('Invalid body provided')
//           }
//         const todo = await db.todoList.create({
//             data: {
//                 name: req.body.name,
//             }
//         })
//         return res.status(201).json({ todo })
//     } catch(e) {
//         res.status(400).json({ error: e?.toString() })
//     }
// }

// export const updateTodo : RequestHandler = async (req: TypedRequestParam, res) => {
//     try {
//         if (!(req.body?.name)) {
//             throw new Error('Invalid body provided')
//           }
//         const todo = await db.todoList.update({
//             where: {
//                 id: Number(req.params.id)
//             },
//             data: {
//                 name: req.body.name,
//             }
//         })
//         return res.status(201).json({ todo })
//     } catch(e) {
//         res.status(400).json({ error: e?.toString() })
//     }
// }  