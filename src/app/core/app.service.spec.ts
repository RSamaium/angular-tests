import { AppService } from "./app.service"

describe('Tester AppService', () => {
    let service: AppService

    beforeEach(() => {
        service = new AppService()
    })

    it('Retour méthode getTitle', () => {
        //expect(service.getTitle()).toBe('Mon App')
        expect(() => service.getTitle()).toThrowError()
    })
})