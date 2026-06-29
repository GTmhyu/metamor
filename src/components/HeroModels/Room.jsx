import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Room(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/bedroom_interior.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="64115b41caee4e36b5fca7397a20fc8dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="VRayCam001" position={[-40.182, 56.629, -254.58]} rotation={[Math.PI, -0.174, Math.PI]} />
                <group name="VRayIES001" position={[56.726, 110.482, 110.713]} rotation={[-1.692, -0.102, -2.447]} />
                <group name="VRayIES001Target" position={[68.882, -7.593, 125.131]} />
                <group name="VRayLight023" position={[-50.415, 49.724, -160.787]} rotation={[Math.PI, -0.436, 0]} />
                <group name="VRayIES002Target" position={[72.915, -7.593, 68.724]} />
                <group name="VRayIES002" position={[56.726, 110.482, 68.724]} rotation={[-Math.PI / 2, -0.136, -Math.PI / 2]} />
                <group name="VRayIES003Target" position={[72.915, -7.593, -0.924]} />
                <group name="VRayIES003" position={[56.726, 110.482, -0.924]} rotation={[-Math.PI / 2, -0.136, -Math.PI / 2]} />
                <group name="VRayIES004Target" position={[72.915, -7.593, -73.29]} />
                <group name="VRayIES004" position={[56.726, 110.482, -73.29]} rotation={[-Math.PI / 2, -0.136, -Math.PI / 2]} />
                <group name="VRayIES005Target" position={[20.919, -7.593, 124.784]} />
                <group name="VRayIES005" position={[20.914, 110.482, 112.468]} rotation={[-1.675, 0, -3.141]} />
                <group name="VRayIES006Target" position={[-31.457, -7.593, 124.784]} />
                <group name="VRayIES006" position={[-31.462, 110.482, 112.468]} rotation={[-1.675, 0, -3.141]} />
                <group name="VRayIES007Target" position={[-82.517, -7.593, 124.784]} />
                <group name="VRayIES007" position={[-71.748, 110.482, 111.415]} rotation={[-1.684, 0.09, 2.469]} />
                <group name="VRayIES008" position={[-71.15, 110.482, 68.214]} rotation={[-1.57, 0.124, 1.566]} />
                <group name="VRayIES008Target" position={[-85.844, -7.593, 68.146]} />
                <group name="VRayIES009" position={[-71.15, 110.482, -2.906]} rotation={[-1.57, 0.124, 1.566]} />
                <group name="VRayIES009Target" position={[-85.844, -7.593, -2.974]} />
                <group name="VRayIES010" position={[-71.15, 110.482, -73.125]} rotation={[-1.57, 0.124, 1.566]} />
                <group name="VRayIES010Target" position={[-85.844, -7.593, -73.193]} />
                <group name="CFL" position={[-76.826, 113.996, -2.766]} rotation={[-1.569, 0, 0]}>
                  <mesh name="CFL_CFL_Ring_0" geometry={nodes.CFL_CFL_Ring_0.geometry} material={materials.CFL_Ring} />
                  <mesh name="CFL_CFL_light_0" geometry={nodes.CFL_CFL_light_0.geometry} material={materials.CFL_light} />
                </group>
                <group name="VRayLight004" position={[64.943, 36.533, -34.531]} rotation={[-1.571, 0.184, 1.569]} scale={-1} />
                <group name="VRayLight021" position={[64.896, 24.32, -4.409]} rotation={[-Math.PI, -0.182, -Math.PI / 2]} />
                <group name="VRayLight015" position={[64.993, 24.32, -65.941]} rotation={[-Math.PI, 0.185, Math.PI / 2]} scale={-1} />
                <group name="Side_table" position={[48.626, 5.49, 14.482]} rotation={[-Math.PI, -1.569, 1.571]}>
                  <mesh name="Side_table_steel1_0" geometry={nodes.Side_table_steel1_0.geometry} material={materials.steel1} />
                  <mesh name="Side_table_Wood_0" geometry={nodes.Side_table_Wood_0.geometry} material={materials.Wood} />
                  <mesh name="Side_table_ICE_Cream_deco_paint_0" geometry={nodes.Side_table_ICE_Cream_deco_paint_0.geometry} material={materials.ICE_Cream_deco_paint} />
                </group>
                <group name="Bedrest" position={[20.317, 17.748, -35.91]} rotation={[-Math.PI / 2, 0, -1.596]}>
                  <mesh name="Bedrest_Bed_sheet_0" geometry={nodes.Bedrest_Bed_sheet_0.geometry} material={materials.Bed_sheet} />
                </group>
                <group name="bed" position={[65.237, 7.954, -36.987]} rotation={[3.142, -1.569, 3.142]}>
                  <mesh name="bed_Wood_0" geometry={nodes.bed_Wood_0.geometry} material={materials.Wood_0} />
                  <mesh name="bed_ICE_Cream_deco_paint_0" geometry={nodes.bed_ICE_Cream_deco_paint_0.geometry} material={materials.ICE_Cream_deco_paint_0} />
                </group>
                <group name="Side_table001" position={[48.626, 5.49, -83.325]} rotation={[-Math.PI, -1.569, 1.571]}>
                  <mesh name="Side_table001_steel1_0" geometry={nodes.Side_table001_steel1_0.geometry} material={materials.steel1_0} />
                  <mesh name="Side_table001_Wood_0" geometry={nodes.Side_table001_Wood_0.geometry} material={materials.Wood_1} />
                  <mesh name="Side_table001_ICE_Cream_deco_paint_0" geometry={nodes.Side_table001_ICE_Cream_deco_paint_0.geometry} material={materials.ICE_Cream_deco_paint_1} />
                </group>
                <group name="Art_02" position={[67.157, 72.201, -35.877]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.837, -0.633, -0.633]}>
                  <group name="Object_65" position={[0, 4.295, -34.285]}>
                    <mesh name="Art_02_border_0" geometry={nodes.Art_02_border_0.geometry} material={materials.border} />
                    <mesh name="Art_02_pic_0" geometry={nodes.Art_02_pic_0.geometry} material={materials.material} />
                  </group>
                </group>
                <group name="table" position={[3.383, 16.909, 99.495]} rotation={[-Math.PI / 2, 0, 0]} scale={1.155}>
                  <group name="Object_70" position={[0, 0, -0.695]}>
                    <mesh name="table__0" geometry={nodes.table__0.geometry} material={materials.RootNode} />
                  </group>
                </group>
                <group name="Art_01" position={[17.016, 79.059, 122.555]} rotation={[0, 0, -Math.PI]} scale={[1, 1, 1.558]}>
                  <mesh name="Art_01_Art05_0" geometry={nodes.Art_01_Art05_0.geometry} material={materials.Art05} />
                  <mesh name="Art_01_ineer_border_0" geometry={nodes.Art_01_ineer_border_0.geometry} material={materials.ineer_border} />
                  <mesh name="Art_01_wood_0" geometry={nodes.Art_01_wood_0.geometry} material={materials.wood} />
                  <mesh name="Art_01_Art01_0" geometry={nodes.Art_01_Art01_0.geometry} material={materials.Art01} />
                  <mesh name="Art_01_art_0" geometry={nodes.Art_01_art_0.geometry} material={materials.material_24} />
                  <mesh name="Art_01_Art2_0" geometry={nodes.Art_01_Art2_0.geometry} material={materials.Art2} />
                  <mesh name="Art_01_Art04_0" geometry={nodes.Art_01_Art04_0.geometry} material={materials.Art04} />
                </group>
                <group name="VRayLight024" position={[-169.263, 42.354, 93.239]} rotation={[-Math.PI, -1.571, 0]} />
                <group name="LCD" position={[-80.959, 25.577, -32.358]} rotation={[-Math.PI / 2, 0, 1.573]}>
                  <mesh name="LCD_WhiteGloss_0" geometry={nodes.LCD_WhiteGloss_0.geometry} material={materials.WhiteGloss} />
                  <mesh name="LCD_BlackGloss_0" geometry={nodes.LCD_BlackGloss_0.geometry} material={materials.BlackGloss} />
                  <mesh name="LCD_Chrome_0" geometry={nodes.LCD_Chrome_0.geometry} material={materials.Chrome} />
                </group>
                <group name="PillowAndMetress" position={[4.683, 18.024, -35.071]} rotation={[-Math.PI / 2, 0, -1.572]} scale={[1, 0.796, 0.914]}>
                  <group name="Object_86" position={[0.286, 19.697, -8.149]}>
                    <mesh name="PillowAndMetress_pillow_0" geometry={nodes.PillowAndMetress_pillow_0.geometry} material={materials.pillow} />
                  </group>
                </group>
                <group name="TV" position={[-78.482, 42.185, -25.779]} rotation={[0, -1.571, 0]}>
                  <mesh name="TV_LCD_Screen_0" geometry={nodes.TV_LCD_Screen_0.geometry} material={materials.LCD_Screen} />
                  <mesh name="TV_LCD_Body_0" geometry={nodes.TV_LCD_Body_0.geometry} material={materials.LCD_Body} />
                </group>
                <group name="Satup_box" position={[-77.153, 11.93, -36.017]} rotation={[-1.578, 0, 0]}>
                  <mesh name="Satup_box_PC_Plastic_Nera_ok_0" geometry={nodes.Satup_box_PC_Plastic_Nera_ok_0.geometry} material={materials.PC_Plastic_Nera_ok} />
                  <mesh name="Satup_box_Floor_0" geometry={nodes.Satup_box_Floor_0.geometry} material={materials.Floor_0} />
                  <mesh name="Satup_box_Glass_(Objects)_0" geometry={nodes['Satup_box_Glass_(Objects)_0'].geometry} material={materials.Glass_Objects} />
                </group>
                <group name="Sofa001" position={[-31.077, 15.968, 100.303]} rotation={[-Math.PI / 2, 0, 2.19]}>
                  <group name="Object_96" position={[-40.573, 14.771, -15.968]}>
                    <mesh name="Sofa001_Febric_0" geometry={nodes.Sofa001_Febric_0.geometry} material={materials.Febric} />
                    <mesh name="Sofa001_Wood_0" geometry={nodes.Sofa001_Wood_0.geometry} material={materials.Wood_2} />
                  </group>
                </group>
                <group name="Wall" position={[-7.528, 0, 0.838]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Wall_Floor_0" geometry={nodes.Wall_Floor_0.geometry} material={materials.Floor} />
                  <mesh name="Wall_wall_0" geometry={nodes.Wall_wall_0.geometry} material={materials.wall} />
                  <mesh name="Wall_Similer_main_0" geometry={nodes.Wall_Similer_main_0.geometry} material={materials.Similer_main} />
                  <mesh name="Wall_Main_0" geometry={nodes.Wall_Main_0.geometry} material={materials.Main} />
                </group>
                <group name="VRayLight001" position={[-217.117, 0, 23.886]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayCam001Target" position={[-19.436, 56.629, -136.836]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayLight003" position={[-38.278, 109.687, 87.8]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayLight013" position={[23.795, 109.687, 87.399]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayLight017" position={[-38.278, 109.687, 26.495]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayLight018" position={[23.795, 109.687, 26.093]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayLight019" position={[-38.278, 109.687, -34.811]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayLight020" position={[23.795, 109.687, -35.212]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayLight021_1" position={[-38.278, 109.687, -96.116]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="VRayLight022" position={[23.795, 109.687, -96.518]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="Celing" position={[-6.141, 114.059, 70.651]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Celing_Ceiling_0" geometry={nodes.Celing_Ceiling_0.geometry} material={materials.Ceiling} />
                </group>
                <group name="Ceiling_light" position={[-6.141, 118.575, -0.571]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.499]}>
                  <mesh name="Ceiling_light_Ceiling_light_Ceiling_light_0" geometry={nodes.Ceiling_light_Ceiling_light_Ceiling_light_0.geometry} material={materials.Ceiling_light_Ceiling_light} />
                </group>
                <group name="Particle_View_01" position={[3.616, 17.691, 99.26]} rotation={[-Math.PI / 2, 0, 0]} scale={0.437} />
                <group name="Scerting" position={[-80.966, 2.462, 40.697]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Scerting_Scerting_Scerting_0" geometry={nodes.Scerting_Scerting_Scerting_0.geometry} material={materials.Scerting_Scerting} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/bedroom_interior.glb')
