//

let driverId = 0
let passId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: [] }

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    return this.trips().map(trip=>{
      return trip.passenger();
    })
  }

}

class Passenger{
  constructor(name) {
    this.name = name
    this.id = ++passId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    return this.trips().map(trip=>{
      return trip.driver();
    })
  }

}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }

  driver() {
    return store.drivers.filter(driver => driver.id === this.driverId)[0]
  }

  passenger() {
    return store.passengers.filter(passenger => passenger.id === this.passengerId)[0]
  }
}
