'use strict';
const server=require('../src/server.js');
const supertest=require('supertest');

const { db } = require('../src/models/index');

const request=supertest(server.app);
jest.setTimeout(8000)
// before any of the test create a connection
beforeAll(async () => {
  await db.sync();
});

// after all the tests are done
afterAll(async () => {
  await db.drop();
});


describe('Web server', () => {

  let id;

  //-------------------------------------------post method for food..........................
it('Post method', async () => {
  const Obj = {
    favariteFood1: 'Pizza',
    favariteFood2: 'Burger'
  };
  const response = await request.post('/food').send(Obj);
  
 
  expect(response.status).toEqual(201);
  expect(  response.body.favariteFood1).toBe(Obj.favariteFood1);
  expect(response.body.favariteFood2).toBe(Obj.favariteFood2);
});

//--------------------------------------------------put method-----------------

it('put methd ', async() =>{

const Obj = {
      favariteFood1: 'jbneh',
      favariteFood2: 'saniorah'
    };
    const response = await request.put(`/food/1`).send(Obj);
    expect(response.status).toEqual(201);
   


})
//-------------------------------------------get method----------------------------------
it('get method to all',async()=>{

const response= await request.get('/food')
expect(  response.status).toEqual(200)
expect(typeof response.body).toEqual('object')


})
//------------------------------------------get  specific item----------------------------------
it('get method to specific record ',async()=>{
const response= await request.get('/food/1')
expect(  response.status).toEqual(200)
expect(typeof response.body).toEqual('object')

})
//-----------------------------------------delete record-----------------------------------------------------
it('get method to delete record ',async()=>{

const response= await request.delete('/food/5')
expect(  response.status).toEqual(204)


})


});