import { HttpClientModule } from "@angular/common/http"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormsModule } from "@angular/forms"
import { UsersComponent } from "./users.component"

describe('Tester les utilisateurs', () => {
  let fixture: ComponentFixture<UsersComponent>
  let component: UsersComponent
  let tpl: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientModule, FormsModule]
    }).compileComponents()

    fixture = TestBed.createComponent(UsersComponent)
    fixture.detectChanges()  // ngOnInit
    await fixture.whenStable()
    fixture.detectChanges()
    component = fixture.componentInstance
    tpl = fixture.nativeElement
  })

  it('Vérifier que liste utilisateur bien affichée', async () => {
    const cardsEl = tpl.querySelectorAll('.card')
    expect(component.users.length).toBeGreaterThan(0)
    expect(cardsEl.length).toBe(component.users.length)
  })

  it('Si on change le champ de texte, propName == valeur du champ', async () => {
    const nameInput = tpl.querySelector('input[name="name"]') as HTMLInputElement
    nameInput.value = 'ana'
    nameInput.dispatchEvent(new Event('input'))
    await fixture.whenStable()
    fixture.detectChanges()
    expect(component.propName).toBe(nameInput.value)
  })

  it('Créer utilisateur', async () => {
    const initUsersLength = component.users.length

    function changeInput(name: string) {
      const input = tpl.querySelector('input[name="' + name + '"]') as HTMLInputElement
      input.value = 'ana'
      input.dispatchEvent(new Event('input'))
    }

    changeInput('name')
    changeInput('email')
    const form = tpl.querySelector('form')
    form?.dispatchEvent(new Event('submit'))
    await fixture.whenStable()
    fixture.detectChanges()

    expect(component.users.length).toBe(initUsersLength+1)
  })
})