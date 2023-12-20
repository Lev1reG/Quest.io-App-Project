const QuestSettings = ({
  Edit,
  ValueID,
  ValueQuest,
  ValueDesc,
  ValueDL,
  HandleQuest,
  HandleDesc,
  HandleDL,
  HandleButton,
  UpdateQuest,
  PostQuest,
}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FCF7A5] p-10 gap-8">
      <h1 className="font-ArcadeClassic text-[50px] text-[#7A3E12]">
        {Edit ? "Edit Quest" : "Create Quest"}
      </h1>
      <form className="flex flex-col gap-y-[20px] font-PixelifySans text-[#7A3E12] text-[50px]">
        <div className="flex flex-row">
          <div className="w-[35%]">
            <label htmlFor="quest">Quest</label>
          </div>
          <div className="w-[700px]">
            <input
              type="text"
              className="text-[30px] bg-[#FFD26D] placeholder-[#7A3E12] w-full"
              placeholder="Enter Quest"
              id="quest"
              value={ValueQuest}
              onChange={(e) => HandleQuest(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[35%]">
            <label htmlFor="desc">Desc</label>
          </div>
          <div className="w-[700px]">
            <input
              type="text"
              className="text-[30px] bg-[#FFD26D] placeholder-[#7A3E12] w-full"
              placeholder="Enter Description"
              id="desc"
              value={ValueDesc}
              onChange={(e) => HandleDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[30%] ">
            <label htmlFor="dl">Deadline</label>
          </div>
          <div className="w-[65%]">
            <input
              type="datetime-local"
              className="text-[30px] bg-[#FFD26D] placeholder-[#7A3E12] w-full"
              value={ValueDL}
              onChange={(e) => HandleDL(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="flex flex-row justify-center items-center w-full gap-8">
        <button
          className="relative flex w-[20%] items-center justify-center"
          onClick={Edit ? (e) => UpdateQuest(ValueID, e) : (e) => PostQuest(e)}
        >
          <img
            src="/QuestList/button.png"
            className="absolute w-full aspect-[5/1]"
            draggable="false"
          />
          <p className="z-10 font-ArcadeClassic text-[#7A3E12] text-[25px]">
            SUBMIT
          </p>
        </button>
        <button
          className="relative flex w-[20%] items-center justify-center"
          onClick={HandleButton}
        >
          <img
            src="/QuestList/button.png"
            className="absolute w-full aspect-[5/1]"
            draggable="false"
          />
          <p className="z-10 font-ArcadeClassic text-[#7A3E12] text-[25px]">
            VIEW QUESTS
          </p>
        </button>
      </div>
    </div>
  );
};

export default QuestSettings;
