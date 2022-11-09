import type { Group as GroupT, Team } from "./../data/fifa";

interface TeamInGroupRowProps {
  team: Team;
}

const TeamInGroupRow = ({ team }: TeamInGroupRowProps) => {
  return (
    <div>
      {team.flag} {team.name}
    </div>
  );
};

interface GroupProps {
  group: GroupT;
}

export const Group = ({ group }: GroupProps) => {
  return (
    <div>
      {group.teams.map((team) => (
        <TeamInGroupRow team={team} key={team.name} />
      ))}
    </div>
  );
};
