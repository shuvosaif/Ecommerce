import multer from 'multer'
import path from 'path'

const productUploadMiddleware = {}

let mimetype = ['image/png', 'image/jpeg', 'image/jpg']
//preparing the path where the file will be stored
let uplaodPath = path.join(process.cwd(), 'public', 'product')

//uploading file in the desired location  & customizing file name with extension
let fileStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uplaodPath),
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname)
    let fileName = `${file.originalname
      .replace(ext, '')
      .split(' ')
      .join('')}${Date.now()}${ext}`
    cb(null, fileName)
  },
})

productUploadMiddleware.upload = multer({
  storage: fileStorage,
  limits: { fileSize: 5000000 },
  fileFilter: (req, file, cb) => {
    if (mimetype.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb('Un supported File Format')
    }
  },
})

export default productUploadMiddleware
