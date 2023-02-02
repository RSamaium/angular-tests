import { Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FilterService, GridModule, GroupService, PageService, SortService, GridComponent } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponentMock extends AppComponent {
  @ViewChild('grid') public grid!: GridComponent;
}


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponentMock>;
  let app: AppComponentMock;
  let tpl: HTMLElement
  let inputEl: HTMLInputElement | null;
  let btnEl: HTMLButtonElement | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DatePickerModule,
        FormsModule,
        
      ],
      declarations: [
        AppComponentMock
      ],
      providers: [PageService,
        SortService,
        FilterService,
        GroupService],
        schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponentMock);
    fixture.detectChanges()

    const fixture2 = TestBed.createComponent(GridComponent);
    fixture2.detectChanges()
    
    app = fixture.componentInstance;
    tpl = fixture.nativeElement;
    inputEl = tpl.querySelector('#firstdatepicker_input');
    btnEl = tpl.querySelector('button')
  });

  it(`btn is disabled'`, () => {
    expect(btnEl?.disabled).toBe(true)
  })

  it('Test', () => {
    app.dateFrom = new Date('01/01/2021')
    fixture.detectChanges()
    expect(btnEl?.disabled).toBe(false)
    expect(inputEl!.value).not.toBe('')
  })

  it(`the date field is filled in with a valid date and the button shoult be enabled'`, () => {
    //app.dateFrom = new Date();
    inputEl!.value = '01/01/2021'

    // normalement si on teste un ngModel, on devrait pouvoir faire comme ça
    /*
    inputEl!.dispatchEvent(new Event('input'));
    await fixture.whenStable() // ngModel is async
    fixture.detectChanges()

    */

    // mais sur ce projet, on a un problème avec le ngModel et le test ne passe pas car on utilise SyncFusion
    // donc on simule un blur sur le champ pour que le ngModel soit mis à jour

    inputEl!.dispatchEvent(new Event('blur'));
    //await fixture.whenStable()

    fixture.detectChanges()
    
    expect( tpl.querySelector('button')?.disabled).toBe(false)
  })

  /*it('ejs-grid exists', () => {
    expect(tpl.querySelector('ejs-grid')).toBeTruthy()
  })

  it('Have 4 tr in table', fakeAsync ( () => {
    // wait that ng content is loaded and expect content of grid element
    /*fixture.detectChanges();
    const subComponent = fixture.debugElement.query(By.directive(GridComponent));

    expect(subComponent.nativeElement.querySelectorAll('tr').length).toBe(4)
    expect(app.grid.allowPaging).toBe(true)
  })) */

 /* it('Test pagination. The first page should be active', () => {
    expect(tpl.querySelector('.e-active')?.textContent).toBe('1')
  }) */
});

