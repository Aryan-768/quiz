class Quiz{
    async start(){
        if(gameState === 0){
           contestant= new Contestant();
           var contestantCountRef = await database.ref('contestantCount').once("vaue");
            if(contestantCountRef.exists()){
             contestantCountRef = contestantCountRef.val();
             contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
}