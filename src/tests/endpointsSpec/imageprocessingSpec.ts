import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing the imageprocessimg endpoint', () => {});
describe('Testing the imageprocessimg endpoint', () => {
    it('Using the endpoint without providing the name parameter returns 400', async () => {
      await request.get('/imageprocessimg').expect(400);
    });
  
    it('Using the endpoint with a non-existent lead returns 404', async () => {
      await request.get('/imageprocessimg?image_name=fjord78.jpg').expect(404);
    });
  
    it('Using the endpoint with a valid lead returns 200', async () => {
      await request.get('/imageprocessimg?image_name=palmtunnel.jpg').expect(200);
    });
  });