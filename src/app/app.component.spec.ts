import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { of } from 'rxjs';
import { User } from './models/user.interface';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('AppComponent', () => {

  let component;
  let servicio

  beforeEach(async () => {

    
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        UserService,
        AppComponent
      ]
    }).compileComponents();
    component= TestBed.get(AppComponent);
    servicio = TestBed.get(UserService);
  });

  afterEach(()=>{

  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('el valor de myvar debe ser hola mundo', () => {
    

    const valor = component.myvar;

    expect(valor).toEqual("hola mundo");
  })

  it('la variable saludo debe contener jhonatan', () => {
    
    const saludo = component.saludo;
    expect(saludo).toContain("jhonatan");
  })


  it('debe retornar true', ()=>{
    
    const respuesta = component.par(22);
    expect(respuesta).toBeTruthy();
  })

  it('debe retornar false', ()=>{
    
    const respuesta = component.par(15);
    expect(respuesta).toBeFalsy();
  })


  it('Debe llamar a userservice y el metodo geall para ibtener los usuarios ', ()=>{

    let mockuser :User[]=[{
      login: "mojombo",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mojombo",
      html_url: "https://github.com/mojombo",
      followers_url: "https://api.github.com/users/mojombo/followers",
      following_url: "https://api.github.com/users/mojombo/following{/other_user}",
      gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
      starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
      organizations_url: "https://api.github.com/users/mojombo/orgs",
      repos_url: "https://api.github.com/users/mojombo/repos",
      events_url: "https://api.github.com/users/mojombo/events{/privacy}",
      received_events_url: "https://api.github.com/users/mojombo/received_events",
      type: "User",
      site_admin: false
    },
    {
      login: "defunkt",
      id: 2,
      node_id: "MDQ6VXNlcjI=",
      avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/defunkt",
      html_url: "https://github.com/defunkt",
      followers_url: "https://api.github.com/users/defunkt/followers",
      following_url: "https://api.github.com/users/defunkt/following{/other_user}",
      gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
      starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
      organizations_url: "https://api.github.com/users/defunkt/orgs",
      repos_url: "https://api.github.com/users/defunkt/repos",
      events_url: "https://api.github.com/users/defunkt/events{/privacy}",
      received_events_url: "https://api.github.com/users/defunkt/received_events",
      type: "User",
      site_admin: false
    }]


    const users = spyOn(servicio, 'getAll').and.callFake((users)=>{
        return of(mockuser);
    });
    component.ngOnInit();
    expect(users).toHaveBeenCalled();

  })


});
