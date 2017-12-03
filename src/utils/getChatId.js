export const getChatId = (userId, targetId) =>{
	return [userId, targetId].sort().join('_')
}