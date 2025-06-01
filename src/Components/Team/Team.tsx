import styles from "./Team.module.css";
import data from "../../../data.json";

const Team = () => {
  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper}>
        <div className={styles.teamMembersDetailsWrapper}>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.staffAdvisor.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.staffAdvisor.name}
              </div>
              <div className={styles.teamMemberDesignation}>Staff Advisor</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.campusLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.campusLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Campus Lead</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.campusCoLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.campusCoLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Campus Co-Lead</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.creativeLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.creativeLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Creative Lead</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.operationLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.operationLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Operation Lead</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.technicalLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.technicalLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Technical Lead</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.mediaLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.mediaLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Media Lead</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.operationTeam1.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.operationTeam1.name}
              </div>
              <div className={styles.teamMemberDesignation}>Operation Team</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.operationTeam2.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.operationTeam2.name}
              </div>
              <div className={styles.teamMemberDesignation}>Operation Team</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.designer1.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.designer1.name}
              </div>
              <div className={styles.teamMemberDesignation}>Designer</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.designer2.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.designer2.name}
              </div>
              <div className={styles.teamMemberDesignation}>Designer</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.contentTeam1.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.contentTeam1.name}
              </div>
              <div className={styles.teamMemberDesignation}>Content Team</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.contentTeam2.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.contentTeam2.name}
              </div>
              <div className={styles.teamMemberDesignation}>Content Team</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.mediaTeam.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.mediaTeam.name}
              </div>
              <div className={styles.teamMemberDesignation}>Media Team</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.igLeadIot.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.igLeadIot.name}
              </div>
              <div className={styles.teamMemberDesignation}>IG Lead-IOT</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.igLeadDesign.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.igLeadDesign.name}
              </div>
              <div className={styles.teamMemberDesignation}>IG Lead-UI/UX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
