import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLouders";
import {buildResolves} from "./buildResolves";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {

    const {mode, paths, isDev} = options;
    return {
        mode: mode, //если дев режим разработки, то все с коментариями и подробно. в продакт режиме все сжато и оптимизировано
        entry: paths.entry, //резолф для склейки учатков пути, дирнейм папка в которой мы находимя(тут корень), затем через запятую учатки пути('./src/index.tsx')<--можно и так но это не прикольно    //стартовая точка нашего прложения
        output: {
            filename: '[name].[contenthash].js', //название файла сборки [динамическое название], для кеширования в браузере, без перезагрузки с сервера,чтобы с изменениями не выкатил старую весию приложения
            path: paths.build, //куда и как пойдет сборка нашего приложения
            clean: true //очищаем файлы после сборки ненужные
        },
        plugins: buildPlugins(options), //вызов функции с плагинами из билдплагинс
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}