import * as React from "react";

interface ITabsContext {
  activeName?: string;
  handleTabClick?: (name: string, content: React.ReactNode) => void;
}
const TabsContext = React.createContext<ITabsContext>({});

interface IState {
  activeName: string;
  activeContent: React.ReactNode;
}
interface ITabProps {
  name: string;
  initialActive?: boolean;
  heading: () => string | JSX.Element;
}
class Tabs extends React.Component<{}, IState> {
  public static Tab: React.FC<ITabProps> = props => {
    
    const {activeName, handleTabClick} = React.useContext(TabsContext)
    React.useEffect(() => {
      if (!activeName && props.initialActive) {
        if (handleTabClick) {
          handleTabClick(props.name, props.children);
        }
      }
    }, [props.name, props.initialActive, props.children, activeName, handleTabClick])

    return (
      <TabsContext.Consumer>
        {(context: ITabsContext) => {
          const activeName = context.activeName
            ? context.activeName
            : props.initialActive
            ? props.name
            : "";
          const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
            if (context.handleTabClick) {
              context.handleTabClick(props.name, props.children);
            }
          };
          return (
            <li
              onClick={handleTabClick}
              className={props.name === activeName ? "active" : ""}
            >
              {props.heading()}
            </li>
          );
        }}
      </TabsContext.Consumer>
    )
  };
  public render() {
    return (
      <TabsContext.Provider
        value={{
          activeName: this.state ? this.state.activeName : "",
          handleTabClick: this.handleTabClick
        }}
      >
        <ul className="tabs">{this.props.children}</ul>
        <div>{this.state && this.state.activeContent}</div>
      </TabsContext.Provider>
    );
  }

  private handleTabClick = (name: string, content: React.ReactNode) => {
    this.setState({ activeName: name, activeContent: content });
  };
}

export default Tabs;
