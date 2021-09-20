import type { NextApiRequest, NextApiResponse } from 'next'

const getCatBySlug = async (id: string | string[]) => {
  return {
    catName: 'bob'
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.PREVIEW_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  // const cat = await getCatBySlug(req.query.id);

  // If the slug doesn't exist prevent preview mode from being enabled
  // if (!cat) {
  //   return res.status(401).json({ message: 'Invalid id' })
  // }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect('/week-5/cats')
}