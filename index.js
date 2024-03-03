
class TelePhone {

    constructor() {
        this.observers = []
        this.phonenumbers = []
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    notifyObserver(number, action) {
        this.observers.forEach(observer => observer.update(number, action))
    }
 
    AddPhoneNumber(number) {
        this.phonenumbers.push(number)
    };


    RemovePhoneNumber(id) {
        console.log(id);
        // let phoneNumbers = Store.getPhoneNumbers()
        let filteredNum = this.phonenumbers.filter(phoneNum => phoneNum.id !== id)

        this.phonenumbers.push(filteredNum)
    };

    DialPhoneNumber(number) {
        let numb = this.phonenumbers.find(num => num === number)
        if(numb){
            this.notifyObserver(number)
        } else {
            console.log(number, "this number is not in your contact");
        }
    };
}

const telePhone = new TelePhone();

class PhoneNumberObserver {
    update(number, action) {
        console.log(`${number}`);
    }
}

class CallObserver{
    update(number, action) {
        console.log(`Now Dialing ${number}.`);  
    }
}


const phonePrint = new PhoneNumberObserver()
const callPrint = new CallObserver()

telePhone.addObserver(phonePrint)
telePhone.addObserver(callPrint)

telePhone.AddPhoneNumber('09142901998')
telePhone.AddPhoneNumber('09142901997')
telePhone.AddPhoneNumber('2347023232')

telePhone.DialPhoneNumber('2347023232')
