/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : decoder

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2019-08-23 17:24:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_camera
-- ----------------------------
DROP TABLE IF EXISTS `tb_camera`;
CREATE TABLE `tb_camera` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `camera_name` varchar(64) NOT NULL,
  `status` varchar(2) DEFAULT NULL,
  `only` varchar(2) DEFAULT NULL,
  `ip` varchar(20) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `model` varchar(100) DEFAULT NULL COMMENT '型号',
  `mac` varchar(100) DEFAULT NULL COMMENT 'mac地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_camera
-- ----------------------------
INSERT INTO `tb_camera` VALUES ('28', '摄像头_44', '0', null, '192.168.1.44', 'admin', 'admin1234', 'CS-C6H-31WFR', 'a4-14-37-f9-05-c6');

-- ----------------------------
-- Table structure for tb_decoder
-- ----------------------------
DROP TABLE IF EXISTS `tb_decoder`;
CREATE TABLE `tb_decoder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(20) NOT NULL COMMENT '解码器ip',
  `decoder_name` varchar(255) DEFAULT NULL,
  `user_name` varchar(20) NOT NULL COMMENT '用户名',
  `password` varchar(20) NOT NULL COMMENT '密码',
  `device_name` varchar(64) DEFAULT NULL COMMENT '设备名称',
  `device_id` varchar(20) DEFAULT NULL COMMENT '设备ID',
  `model` varchar(20) DEFAULT NULL COMMENT '型号',
  `serial_number` varchar(64) DEFAULT NULL COMMENT '序列号',
  `mac_address` varchar(20) DEFAULT NULL COMMENT 'mac地址',
  `firmware_version` varchar(20) DEFAULT NULL COMMENT '防火墙版本',
  `firmware_released_date` varchar(20) DEFAULT NULL COMMENT '防火墙发布日期',
  `logic_version` varchar(20) DEFAULT NULL COMMENT '物理版本',
  `logic_released_date` varchar(20) DEFAULT NULL COMMENT '物理发布版本',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_decoder
-- ----------------------------
INSERT INTO `tb_decoder` VALUES ('16', '192.168.1.65', '解码器_192.168.1.65', 'admin', 'admin12345', null, null, 'DS-6401HD-T', null, '8c-e7-48-9b-b9-93', null, null, null, null);

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(20) NOT NULL,
  `user_name` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES ('1', 'admin', 'admin', '12345');
