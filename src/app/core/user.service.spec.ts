import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Observable, of } from 'rxjs';
import { User, UserService } from './user.service';
import { TestBed } from '@angular/core/testing'

const USER_DATA = { name: 'ana', email: 'ana@gmail.com' }

class UserServiceMock extends UserService {
  override getAll(): Observable<User[]> {
    return of([USER_DATA])
  }
}

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController
  /*let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new UserService(httpClientSpy)
  });

  it('list users', (done) => {
    const expectedUsers = [USER_DATA]
    httpClientSpy.get.and.returnValue(of(expectedUsers))

    service.getAll().subscribe({
      next: (users) => {
         expect(users).toEqual(expectedUsers)
         done()
      },
      error: done.fail
    })

    expect(httpClientSpy.get.calls.count()).toBe(1)
  })

  it('add user in user list', () => {
    const user = USER_DATA
    service.addUser(user)
    expect(service.users).toContain(user)
  })

  it('error if user object is missing required params', () => {
    const user = { name: 'ana' }
    expect(() => service.addUser(user as User)).toThrowError()
  })
  */

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      /*providers: [{
        provide: UserService,
        useClass: UserServiceMock
      }]*/
    })

    service = TestBed.inject(UserService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  it('list users', (done) => {
    const expectedUsers = [USER_DATA]

    service.getAll().subscribe({
      next: (users) => {
         expect(users).toEqual(expectedUsers)
         done()
      },
      error: done.fail
    })

    const request = httpMock.expectOne(service.url)
    expect(request.request.method).toBe('GET')
    request.flush(expectedUsers)

  })

  it('add user in user list', () => {
    const user = USER_DATA
    service.addUser(user)
    expect(service.users).toContain(user)
  })

  afterEach(() => {
    httpMock.verify()
  })
});
