require('ignore-styles');
import { Router } from '../router'
const port = process.env.PORT || 3001

console.log(`\n🎉  Starting HTTP server at http://localhost:${port}`)

Router.listen(port)
