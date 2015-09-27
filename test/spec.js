describe('slugify', function() {

  var slugify = window.slugify;

  describe('instance', function() {
    it('should exists slugify function', function() {
      expect(slugify).be.an('function');
    });

    it('should exists bind method in slugify', function() {
      expect(slugify.bind).be.an('function');
    });

    describe('slug', function() {
      it('should returns a string', function() {
        expect(slugify('this is a test')).be.an('string');
      });
    
      it('should replace whitespaces with dash', function() {
        expect(slugify('this is a test')).to.equal('this-is-a-test');
       });

      it('should replace text in upper case to lower case', function() {
        expect(slugify('This Is A Test')).to.equal('this-is-a-test');
      });

      it('should remove text accents', function() {
        expect(slugify('Cãoáà ÇÃáéê bééé~ooo^aa')).to.equal('caoaa-caaee-beee-ooo-aa');
      });

      it('should remove dots', function() {
        expect(slugify('This is a test.$%#@*& Will be it is working? I hope so!'))
               .to.equal('this-is-a-test-will-be-it-is-working-i-hope-so');
      });
    });

    describe('bind', function() {
      it('should update input slug after title was changed', function() {
                
      });
    });
  });

});
