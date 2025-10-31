import { databaseKVAdapter, getPayload } from "payload"
import configPromise from '@payload-config'



export default async function Page() {
  const payload = await getPayload({
    config: configPromise
  })

const data = await payload.find({
  collection: 'categories',
})


  return (
    <div>

    </div>
  )
}
