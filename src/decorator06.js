import {override} from 'core-decorators' ;

class Perent{
    speak(first,second){}
}

class Child extends Perent{
    @override
    speak(){

    }
}