describe('Test Home Page Page', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should render Welcome to Next.js", () => {
    cy.get("h1").contains("Welcome to Next.js!")
  });

  it("Should be able redirect to Login Page", () => {
    cy.get('[data-cy="login"]').click()
    cy.url().should('include', '/login');
  });

  it("Should be able redirect to Register Page", () => {
    cy.get('[data-cy="register"]').click()
    cy.url().should('include', '/register');
  });
});

describe('Test Login Page flow', () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it('Should display error when username and password is empty', () => {
    cy.get('[data-cy="btn-login"]').click();
    cy.contains('Username is required');
    cy.contains('Password is required');
  });

  it('Should display error when password is empty', () => {
    cy.contains('Username').find('input').type('testuser');
    cy.get('[data-cy="btn-login"]').click();
    cy.contains('Password is required');
  });

  it('Should display error when username is empty', () => {
    cy.contains('Password').find('input').type('12345');
    cy.get('[data-cy="btn-login"]').click();
    cy.contains('Username is required');
  });

  it('should show error message when credentials are incorrect', () => {
    cy.contains('Username').find('input').type('Wahyu Alfarisi');
    cy.contains('Password').find('input').type('123456');

    cy.get('[data-cy="btn-login"]').click();
    cy.contains('Username / Password salah!');
  });

  it('Should redirect to Dashboard page when creds are correct', () => {
     cy.contains('Username').find('input').type('usertest');
     cy.contains('Password').find('input').type('userpassword');
     
     cy.get('[data-cy="btn-login"]').click();
     cy.contains('Hi, Welcome back to The Dashboard')
     cy.url().should('include', '/dashboard');
   });
});

describe('Test Register Page flow', () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it('Should display error when fullname, email, username, and password is empty', () => {
    cy.get('[data-cy="btn-register"]').click();

    cy.contains('Fullname is required');
    cy.contains('Email is required');
    cy.contains('Username is required');
    cy.contains('Password is required');
  });

  it('Should show error when Email already exist', () => {
    cy.contains('Fullname').find('input').type('Wahyu Alfarisi');
    cy.contains('Email').find('input').type('wahyu.alfarisi@amartha.com');
    cy.contains('Username').find('input').type('alfarisi');
    cy.contains('Password').find('input').type('123456');

    cy.get('[data-cy="btn-register"]').click();
    cy.contains('Email sudah digunakan');
  });

  it('Should redirect to Dashboard when success register', () => {
    cy.contains('Fullname').find('input').type('Wahyu Alfarisi');
    cy.contains('Email').find('input').type('user.test@amartha.com');
    cy.contains('Username').find('input').type('alfarisi');
    cy.contains('Password').find('input').type('123456');

    cy.get('[data-cy="btn-register"]').click();
    cy.contains('Hi, Welcome back to The Dashboard');
    cy.url().should('include', '/dashboard');
  });
});