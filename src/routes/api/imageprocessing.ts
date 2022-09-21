
import { Router, Request, Response } from 'express';
import path from 'path';
import imageprocessing from '../../utils/_DATA';


const imageprocessing_routes = Router();

imageprocessing_routes.get('/', (req, res) => {
imageprocessing_routes.get('/', (req: Request, res: Response) => {
  const image_name = req.query.name as string;
  const image_height = req.query.image_height ;
  const image_width = req.query.image_width ;
  const imgLocation = path.resolve('./') + `/images/${image_name}.jpg`+image_height+image_width;
  const images_name = imageprocessing.includes(image_name);
  // If the name query wasn't provided return and end function
  if (image_name === undefined) {
    return res
      .status(400)
      .send('Bad request, query parameter (name) is required.');
  }
  // If the name doesn't exist in the array return and end function
  if (images_name === false) {
    return res
      .status(404)
      .send('Resource not found, this picture does not exist!');
  }

  // Otherwise return the lead's avatar
  res.sendFile(imgLocation);
})});

export default imageprocessing_routes;