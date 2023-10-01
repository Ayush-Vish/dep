import path from 'path'
import multer from 'multer'

const upload  = multer({
    
    limits:{fileSize : 1024* 1024 *50},
    storage:multer.diskStorage({}),
    fileFilter: (_req , file , cb ) => {
        console.log(file)
        console.log(_req)
        let ext =   path.extname (file.originalname)
        console.log("multer me hu ")
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