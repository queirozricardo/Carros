import app from './app'
import * as dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT || 3550, () => console.log('API CARUPI INICIOU -> PORT 3550'))