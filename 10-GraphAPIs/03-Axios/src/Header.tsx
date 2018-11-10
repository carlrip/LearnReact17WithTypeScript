import React from "react";
import axios from "axios";

interface IViewer {
  name: string;
  avatarUrl: string;
}
interface IQueryResult {
  data: {
    viewer: IViewer;
  };
}

export const Header: React.SFC = () => {
  const [viewer, setViewer]: [
    IViewer,
    (viewer: IViewer) => void
  ] = (React as any).useState({});

  (React as any).useEffect(() => {
    axios
      .post<IQueryResult>(
        "https://api.github.com/graphql",
        {
          query: `query {
                viewer {
                  name
                  avatarUrl
                }
              }`
        },
        {
          headers: {
            Authorization: "bearer c38748afe55176e582f6aabf562ec97bb1121eb0"
          }
        }
      )
      .then(response => {
        setViewer(response.data.data.viewer);
      });
  }, []);

  return (
    <div>
      <img src={viewer.avatarUrl} className="avatar" />
      <div className="viewer">{viewer.name}</div>
      <h1>GitHub Search</h1>
    </div>
  );
};
