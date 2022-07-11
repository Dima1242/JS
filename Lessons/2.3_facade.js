class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplains extends Complaints {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}


class ServiceComplains extends Complaints {
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`
    }
}

class ComplaintsRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if (type === 'service') {
            complaint = new ServiceComplains()
        } else {
            complaint = new ProductComplains()
        }

        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintsRegistry()

console.log(registry.register('Vladilen', 'service', 'unavailable'));
console.log(registry.register('Elena', 'product', 'error'));