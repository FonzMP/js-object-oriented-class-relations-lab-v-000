let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return store.passengers.filter(passenger => {
      return store.trips.filter(trip => {
        if (trip.id === this.id) {
          return passenger.id === trip.passengerId
        }
      })
    })
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++ passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(passenger => {
      return passenger.passengerId === this.id
    })
  }

  drivers() {
    return store.drivers.filter(driver => {
      return store.trips.filter(trip => {
        if (trip.id === this.id) {
          return passdriverenger.id === trip.driverId
        }
      })
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

    passenger() {
      return store.passengers.find(passenger => {
        return passenger.id === this.passengerId
      })
    }

    driver() {
      return store.drivers.find(driver => {
        return driver.id === this.driverId
      })
    }
}