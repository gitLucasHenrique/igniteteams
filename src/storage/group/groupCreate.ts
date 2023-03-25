import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION } from "@storage/storageConfig"
import { AppError } from "@utils/AppError"
import { groupGetAll } from "./groupGetAll"

export async function groupCreate(newGroup: string){
    try {
        const storedGroups = await groupGetAll()

        const groupAlreadyExists = storedGroups.includes(newGroup)

        if(groupAlreadyExists){
            throw new AppError('Group already exists.')
        }

        const storage = JSON.stringify([...storedGroups, newGroup])
        
        await AsyncStorage.setItem(GROUP_COLLECTION, storage)
    } catch (error) {
        throw error
    }
}