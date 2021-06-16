import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Companies spend $12k per focus group to test content, now creators can too at a fraction of the cost!',
    paragraph: "Creators are becoming the main driver for online entertainment; however, they do not have the same level of insight generation or content feedback as companies. Companies spend more than $3B+ annually to gauge content success and gain feedback. With Hypebility, creators no longer need anywhere near that level of capital to get the same level of insight!"
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Targeted Reviewing
                    </h4>
                  <p className="m-0 text-sm">
                    Have your content reviewed by individuals who are interested in the categories you create in and use the same platforms you create on.                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Customizable, Insightful and Actionable
                    </h4>
                  <p className="m-0 text-sm">
                    Pick questions prepared by experts or submit your own. You will receive insightful feedback and actionable recommendations on your content.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Affordable & Flexible
                    </h4>
                  <p className="m-0 text-sm">
                    Our price points ensure that Hypebility is accessible to all creators! Even so, reviewers get paid to review content so you can pay for Hypebility with Hypebility!
                    </p>
                </div>
              </div>
            </div>

            {/*<div className="tiles-item reveal-from-bottom">*/}
            {/*  <div className="tiles-item-inner">*/}
            {/*    <div className="features-tiles-item-header">*/}
            {/*      <div className="features-tiles-item-image mb-16">*/}
            {/*        <Image*/}
            {/*          src={require('./../../assets/images/feature-tile-icon-04.svg')}*/}
            {/*          alt="Features tile icon 04"*/}
            {/*          width={64}*/}
            {/*          height={64} />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="features-tiles-item-content">*/}
            {/*      <h4 className="mt-0 mb-8">*/}
            {/*        Robust Workflow*/}
            {/*        </h4>*/}
            {/*      <p className="m-0 text-sm">*/}
            {/*        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">*/}
            {/*  <div className="tiles-item-inner">*/}
            {/*    <div className="features-tiles-item-header">*/}
            {/*      <div className="features-tiles-item-image mb-16">*/}
            {/*        <Image*/}
            {/*          src={require('./../../assets/images/feature-tile-icon-05.svg')}*/}
            {/*          alt="Features tile icon 05"*/}
            {/*          width={64}*/}
            {/*          height={64} />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="features-tiles-item-content">*/}
            {/*      <h4 className="mt-0 mb-8">*/}
            {/*        Robust Workflow*/}
            {/*        </h4>*/}
            {/*      <p className="m-0 text-sm">*/}
            {/*        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="tiles-item reveal-from-bottom" data-reveal-delay="400">*/}
            {/*  <div className="tiles-item-inner">*/}
            {/*    <div className="features-tiles-item-header">*/}
            {/*      <div className="features-tiles-item-image mb-16">*/}
            {/*        <Image*/}
            {/*          src={require('./../../assets/images/feature-tile-icon-06.svg')}*/}
            {/*          alt="Features tile icon 06"*/}
            {/*          width={64}*/}
            {/*          height={64} />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="features-tiles-item-content">*/}
            {/*      <h4 className="mt-0 mb-8">*/}
            {/*        Robust Workflow*/}
            {/*        </h4>*/}
            {/*      <p className="m-0 text-sm">*/}
            {/*        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;