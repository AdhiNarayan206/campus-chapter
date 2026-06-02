import { useState, useEffect, useRef } from "react";
import styles from "./Team.module.css";
import data from "../../../data.json";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";

const Team = () => {
  const teamMembers = Object.keys(data.team).length;
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.screen.width : 1200
  );
  const [screenHeight, setScreenHeight] = useState(
    typeof window !== "undefined" ? window.screen.height : 800
  );
  const [rowCount, setRowCount] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function calculateLinePositions(
    numRows: number,
    topOffsetPercent: number = 3
  ): string[] {
    const positions: string[] = [];
    if (numRows <= 1) {
      return [topOffsetPercent + "%"];
    }

    const usableHeight = 100 - topOffsetPercent;

    for (let i = 0; i < numRows; i++) {
      const position = topOffsetPercent + (i / (numRows - 1)) * usableHeight;
      const clampedPosition = Math.min(position, 100);
      const factor =
        i === 0
          ? 0
          : window.innerWidth <= 768
          ? i === 1
            ? 0
            : 1 * i
          : i !== numRows - 1
          ? 5 * i
          : 20;
      positions.push(parseFloat(clampedPosition.toFixed(2)) - factor + "%");
    }

    return positions;
  }

  interface RowCalculationParams {
    totalItems: number;
    containerWidth: number;
    imageWidth: number;
  }

  const calculateRows = ({
    totalItems,
    containerWidth,
    imageWidth,
  }: RowCalculationParams): number => {
    const imagesPerRow = Math.floor(containerWidth / imageWidth);
    if (imagesPerRow === 0) return totalItems;
    return Math.ceil(totalItems / imagesPerRow) + (window.innerWidth <= 768
      ? 0
      : window.innerWidth <= 1300?0:1);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
      setScreenHeight(window.screen.height);

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      } else {
        setContainerWidth(screenWidth * 0.8);
      }
    };

    handleResize();
   // window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth, screenHeight]);

  useEffect(() => {
    let imageWidth;
    if (screenWidth <= 400) {
      imageWidth = screenWidth * 0.4;
    } else if (screenWidth <= 500) {
      imageWidth = screenWidth * 0.35;
    } else if (screenWidth <= 900) {
      imageWidth = screenWidth * 0.25;
    } else if (screenWidth <= 1200) {
      imageWidth = screenWidth * 0.2;
    } else {
      imageWidth = 250;
    }

    const rows = calculateRows({
      totalItems: teamMembers,
      containerWidth,
      imageWidth,
    });
    setRowCount(Math.max(rows, 1));
  }, [teamMembers, containerWidth, screenWidth]);

  const linePositions = calculateLinePositions(rowCount, 3);

  const lineImages = [];
  for (let i = 0; i < rowCount; i++) {
    lineImages.push(
      <img
        key={`line-${i}`}
        src={i % 2 === 0 ? line : line2}
        alt=""
        loading="lazy"
        className={styles.lineImage}
        style={{ top: linePositions[i] }}
      />
    );
  }

  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper}>
        <div className={styles.teamBgLineWrapper}>{lineImages}</div>
        <div ref={containerRef} className={styles.teamMembersDetailsWrapper}>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={`${styles.teamImageIndividual} ${styles.ImagePositionAdjust}`}
                src={data.team.staffAdvisor.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.staffAdvisor.name}
              </div>
              <div className={styles.teamMemberDesignation}>Lead Enabler</div>
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
                className={`${styles.teamImageIndividual} ${styles.ImagePositionAdjust}`}
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
                src={data.team.contentLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.contentLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Content Lead</div>
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
                className={`${styles.teamImageIndividual} ${styles.ImagePositionAdjust}`}
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
                src={data.team.mediaTeam1.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.mediaTeam1.name}
              </div>
              <div className={styles.teamMemberDesignation}>Media Team</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.mediaTeam2.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.mediaTeam2.name}
              </div>
              <div className={styles.teamMemberDesignation}>Media Team</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.igLeadAI.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.igLeadAI.name}
              </div>
              <div className={styles.teamMemberDesignation}>IG Lead-AI</div>
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
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.igLeadCyberSecurity.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.igLeadCyberSecurity.name}
              </div>
              <div className={styles.teamMemberDesignation}>IG Lead-Cyber Security</div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.igLeadWeb.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.igLeadWeb.name}
              </div>
              <div className={styles.teamMemberDesignation}>IG Lead-Web</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
