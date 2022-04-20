const MissionCommander = require('./../app/missionCommander');

describe('Unit Tests for Mission Commander Class', () =>{


	test('1) Create a mission commander object',()=>{

	const myMissionCommander = new MissionCommander('Daniel');
	expect(myMissionCommander.name).toBe('Daniel');
});

})



/*describe("Esto es una suite de pruebas",()=>{

		test('Caso de prueba 1',() =>{


		const result = 1 + 2
		expect(result).toBe(3);
		//expect(result).toBe(10);
    });


})*/
