describe('authentication tests', () => {
	it('sign in user', () => {
		let testCookie = 'testCookie';
		signInUseCase: ISignInUseCase = new SignInUseCase();
		let cookie = signInUseCase.signIn();
		expect(cookie).toBe(testCookie);
	})
});