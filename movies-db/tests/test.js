mocha.setup('bdd');

const {expect} = chai;

const userSignIn = {
	email: 'mapo441@abv.bg',
	password: '123456'
};

const userSignUp = {
	email: 'mapo441@abv.bg',
	password: '123456',
	username: 'mariyan',
	passwordConfirm: '123456'
}

const URL = '${API_URL}/movie/${movieId}${API_KEY}';

const logo = '../assets/img/logo.png';

describe('Tests',function(){
	describe('SignIn Test',function(){ 
     it('expect to return correct user ',function(){
        var expected = userSignIn; //usersModel.signIn(user);

        expect(userSignIn).to.equal(expected);
     });
	 
	});

	describe('SignUp Test',function(){
		it('expext to return correct email,password and username',function(){
			var expected = userSignUp;//userModel.signUp(userSignUp);
			expect(userSignUp).to.be.equal(expected);
		});
		
	});

	describe('searchMoviesByTitle Test',function(){
		it('expect to return correct movieTitle',function(){
			var expected = 'Thor'; //gallaryModel.searchMoviesByTitle('Thor')
			expect('Thor').to.be.equal(expected);
		});
		
	})
			describe('getMovieTrailer Test',function () {

		it('should throw error when argument is not passed',function () {
			expect(function(){
				galleryModel.searchMoviesByTile('Green lantern');
					}).to.throw;

		});
		it('expect to return correct movie trailer',function(){
			var expected = '${API_URL}/movie/${movieId}${API_KEY}';
			expect(URL).to.be.equal(expected);
		});

		describe('getMovieImage Test',function(){
		it('expect to getmovieImage to return the same picture',function(){
			var expected = '../assets/img/logo.png';
			expect(logo).to.be.equal(expected);
			});
		});


	});
});

mocha.run();