import "./SelfDesign.css";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import React, { Component } from 'react';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

class Selfdesign extends Component{

    static defaultProps = {
        className: "layout",
        items: 20,
        rowHeight: 30,
        onLayoutChange: function() {},
        cols: 12
      };

      constructor(props) {
        super(props);

        const layout = this.generateLayout();
        this.state = { layout };
    }

    //Generates the data that will be in each collage square
    generateDOM() {
        return _.map(_.range(this.props.items), function(i) {
          return (
            <div style={{backgroundColor: "gray"}} key={i}>
              <span className="text">{i}</span>
            </div>
          );
        });
      }
    
      //Generates the layout...duh
      generateLayout() {
        const p = this.props;
        return _.map(new Array(p.items), function(item, i) {
          const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
          return {
            x: (i * 2) % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString()
          };
        });
      }

      onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
      }


    render(){
        return(
            <div>
                <ReactGridLayout
                    layout={this.state.layout}
                    onLayoutChange={this.onLayoutChange}
                    {...this.props}
                >
                    {this.generateDOM()}
                </ReactGridLayout>
            </div>
        )
    }
}

export default Selfdesign;