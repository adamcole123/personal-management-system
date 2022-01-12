import IAuthenticationEngine from '@winston/drivers/IAuthenticationEngine';
import { mock } from 'jest-mock-extended'

describe('authentication tests', () => {
	it('sign in user', () => {
		let mockAuthenticationEngine = mock<IAuthenticationEngine>();

		mockAuthenticationEngine.verifyUser.mockReturnValue = {
			email: 'testemail@test.com'
		}

		let testCookie = 'testCookie';
		let signInUseCase: any = new SignInUseCase(mockAuthenticationEngine);
		let userDetails = signInUseCase.signIn();
		expect(userDetails).toContain({email: "testemail@test.com"});
	})
});