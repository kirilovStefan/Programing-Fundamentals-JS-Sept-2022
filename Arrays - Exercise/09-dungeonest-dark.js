function dungeonestDark(array) {
    let health = 100
    let coins = 0

    let isDead = false
    let level = 0
    let allRooms = array[0].split("|")

    for (let index = 0; index < allRooms.length; index++) {
        let room = allRooms[index].split(" ")
        level++

        if (room[0] === "potion") {
            let takenPotion = Number(room[1])
            if (health <= 100) {
                if (health + takenPotion >= 100) {
                    takenPotion = 100 - health
                    health = 100
                } else {
                    health += takenPotion
                }
            }
            console.log(`You healed for ${takenPotion} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (room[0] === "chest") {
            let currentCoins = Number(room[1])
            coins += currentCoins
            console.log(`You found ${currentCoins} coins.`)
        } else {
            let currentMonster = room[0]
            let monsterAttack = Number(room[1])
            health -= monsterAttack
            if (health > 0) {
                console.log(`You slayed ${currentMonster}.`)
            } else {
                isDead = true
                console.log(`You died! Killed by ${currentMonster}.`)
                console.log(`Best room: ${level}`)
                break;
            }
        }
    }

    if (!isDead) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])