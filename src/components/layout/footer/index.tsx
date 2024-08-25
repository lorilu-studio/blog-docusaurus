import { useThemeConfig } from '@docusaurus/theme-common';
import { siteData } from '@site/data/site';
import clsx from 'clsx';
import { isNil } from 'lodash-es';
import React, { FC } from 'react';

import $styles from './style.module.css';

export const Footer: FC<{ className?: string }> = ({ className }) => {
    const { footer } = useThemeConfig();
    if (!footer) {
        return null;
    }
    const { copyright } = footer as any;

    return (
        <footer className={`tw-w-full ${className}`}>
            <div className={`container ${$styles.container}`}>
                {copyright && (
                    <div className={clsx($styles.btn, $styles.copyright)}>
                        <span>Copyright © </span>
                        <span>{copyright}</span>
                    </div>
                )}
                <div className={clsx($styles.btn, $styles.themeby)}>
                    <span>Theme by</span>
                    <a href="https://github.com/rowfishjs/rowfish" target="_blank" rel="noreferrer">
                        rowfish
                    </a>
                </div>
            </div>
        </footer>
    );
};
