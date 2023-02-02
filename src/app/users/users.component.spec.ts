import { HttpClientModule } from "@angular/common/http"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { UsersComponent } from "./users.component"

describe('Tester les utilisateurs', () => {
  let fixture: ComponentFixture<UsersComponent>
  let component: UsersComponent
  let tpl: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientModule]
    }).compileComponents()

    fixture = TestBed.createComponent(UsersComponent)
    fixture.detectChanges()  // ngOnInit
    await fixture.whenStable()
    fixture.detectChanges()
    component = fixture.componentInstance
    tpl = fixture.nativeElement
  })

  it('Vérifier que liste utilisateur bien affichée',  async() => {
    const cardsEl = tpl.querySelectorAll('.card')
    expect(component.users.length).toBeGreaterThan(0)
    expect(cardsEl.length).toBe(component.users.length)
  })

  it('', () => {

  })
})