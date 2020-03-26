const request = require("supertest");

const server = require("./server.js")

describe('server.js', function(){
    describe('GET /', function(){

        it('should return 200 ok', function(){
            return request(server)
            .get("/")
            .expect(200);
        })

        it('should return JSON', function(){
            return request(server)
            .get("/")
            .type('application/json')
        })

        it('should return JSON', function(){
            return request(server).get("/").then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })

        it('should respond with { api: "up" }', function(){;
        return request(server)
        .get("/")
        .expect('{"api":"up"}')
        })

        it('should respond with { api: "up" }', function(){;
            return request(server).get("/").then(res => {
                expect(res.body.api).toBe("up");
            })
        })
        
    });
});

describe('server.js', function(){})
describe('server.js', function(){})
describe('server.js', function(){})
describe('server.js', function(){})
describe('server.js', function(){})