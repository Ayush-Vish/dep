import path from 'path'
import multer from 'multer'
const upload  = multer({
    dest:"uploads/",
    limits:{fileSize : 1024* 1024 *50},
    storage:multer.diskStorage({
        destination:'uploads/',
        filename:(_req ,file ,cb) =>{
            cb(null,file.originalname)
        },
        
    }),
    fileFilter: (_req , file , cb ) => {
        console.log(file)
        console.log(_req)
        let ext =   path.extname (file.originalname)
        if(
            ext !== '.jpg' &&
            ext !== '.jpeg' &&
            ext !== '.wepg' &&
            ext !== '.png' &&
            ext !== '.mp4'

        ) {
            cb(new Error(`Unsupported File Format ${ext}` )  ,false)
            return 
        }
        cb(null , true)
    },
})


export default upload