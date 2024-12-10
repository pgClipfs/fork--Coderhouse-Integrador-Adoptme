import __dirname from "./index.js";
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let fileDestination = `${__dirname}/../public/`;
        switch (req.baseUrl) {
            case '/api/users': {
                fileDestination = `${fileDestination}/documents`
                break;
            }
            case '/api/pets': {
                fileDestination = `${fileDestination}/pets`
                break;
            }
            default: {
                fileDestination = `${fileDestination}/img`
            }
        }
        cb(null, fileDestination)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const uploader = multer({ storage })

export default uploader;