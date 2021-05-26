
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "uk.co.workingedge.cordova.plugin.sqliteporter.sqlitePorter",
          "file": "plugins/uk.co.workingedge.cordova.plugin.sqliteporter/www/sqlitePorter.js",
          "pluginId": "uk.co.workingedge.cordova.plugin.sqliteporter",
        "clobbers": [
          "cordova.plugins.sqlitePorter"
        ]
        },
      {
          "id": "cordova-sqlite-storage.SQLitePlugin",
          "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
          "pluginId": "cordova-sqlite-storage",
        "clobbers": [
          "SQLitePlugin"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-sqlite-storage": "6.0.0",
      "uk.co.workingedge.cordova.plugin.sqliteporter": "1.1.1"
    };
    // BOTTOM OF METADATA
    });
    